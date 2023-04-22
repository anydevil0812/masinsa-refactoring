#Selenium을 이용한 크롤링

#I. 환경설정
import datetime
import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys #키보드 입력을 위한 모듈
from selenium.webdriver.common.by import By #요소를 찾기 위한 모듈
from selenium.webdriver.support.ui import WebDriverWait #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.webdriver.support import expected_conditions as EC #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.common.exceptions import TimeoutException #요소가 로드되지 않을 때 예외처리를 위한 모듈
from selenium.webdriver.common.action_chains import ActionChains #마우스 이벤트를 위한 모듈
from selenium.webdriver.common.alert import Alert #alert창을 위한 모듈
from selenium.webdriver.support.ui import Select #드롭다운 메뉴를 위한 모듈
import os
import csv
import re

warnings.filterwarnings('ignore')


#II. 크롤러 생성
class Crawler:
  def setup(self, path, imp_wait_time=10, load_time=10):
    self.driver = webdriver.Chrome(path)
    self.driver.implicitly_wait(imp_wait_time)
    self.driver.set_page_load_timeout(load_time)
    self.start_time = time.time()
    self.mask_data = []

  def get_url(self, url):  # 페이지를 열어주는 메서드. url을 인자로 받습니다
    self.url = url
    self.driver.get(self.url)
    self.driver.maximize_window() # 창을 최대화 합니다

  def get_mask_data(self, xpath, review_xpath = None):
    #xpath : text body에 해당하는 xpath
    #review_xpath : 리뷰 버튼에 해당하는 xpath
    if review_xpath != None: #리뷰 버튼 지정시 먼저 리뷰 버튼 클릭
      #click on review button
      review_button = self.driver.find_element(By.XPATH, review_xpath)
      review_button.click()
      time.sleep(1)

    #get text
    text = self.driver.find_element(By.XPATH, xpath).text
    # print(text)
    text = text.replace('\n', ' ').replace('리뷰 더보기 /접기', '').replace('평점', '\n평점')
    text = text.split('\n')

    # print(text)
    for i in range(0, len(text)):
      self.mask_data.append([text[i]])


    

  def move_to_next_page(self, xpath):
    XPath = xpath  #xpath를 '다음'버튼으로 설정시 다음 버튼 클릭함
    WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, XPath))) #페이지가 로드될 때까지 기다립니다
    next_page = self.driver.find_element(By.XPATH, xpath)
    next_page.click() #다음 페이지로 이동합니다

  #mask_data를 csv로 저장

  def export_data(self, filename, path = os.getcwd()): #파일명, 저장경로를 인자로 받습니다. 저장경로를 지정하지 않으면 현재 경로에 저장됩니다
    #convert list to csv format
    if not os.path.exists(filename):
      with open(path + '/' + filename + '.csv', 'w', encoding='utf-8', newline='') as f :
        writer = csv.writer(f)
        writer.writerows(self.mask_data)
    else:
      with open(path + '/' + filename + '.csv', 'a', encoding='utf-8', newline='') as f :
        writer = csv.writer(f)
        writer.writerows(self.mask_data)


  def close(self):
    self.driver.close()


  

#III. 실행
if __name__ == '__main__' : #파이썬 파일을 직접 실행할 때만 실행되는 코드입니다. 이 코드를 실행하면, boxer_data에 복서들의 데이터가 저장됩니다
  crawler = Crawler()

  #크롬드라이버 경로 설정
  driver_path = "C:\\Users\\Lenovo\\Downloads\\chromedriver.exe"
  crawler.setup(driver_path)

  #url 설정
  url = 'https://smartstore.naver.com/blueindus/products/5488965225?'
  crawler.get_url(url)

  #데이터 수집
  text_xpath = '//*[@id="REVIEW"]/div/div[3]'
  next_xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/div/div/a[8]'
  review_xpath = '//*[@id="content"]/div/div[3]/div[3]/ul/li[2]/a'

  crawler.get_mask_data(text_xpath, review_xpath)
  count = 0
  for i in range(10):
    if i < 4:
      crawler.move_to_next_page(next_xpath)
      next_xpath = next_xpath[:-2] + str(int(next_xpath[-2]) + 1) + next_xpath[-1]
      crawler.get_mask_data(text_xpath)
    else:
      # use 12 for -2th index of next_path
      new_next_xpath = next_xpath[:-3] + str(12) + "]"
      crawler.move_to_next_page(new_next_xpath)
      crawler.get_mask_data(text_xpath)

  #데이터 저장
  filename = 'mask_data'
  crawler.export_data(filename)

  print(crawler.mask_data)