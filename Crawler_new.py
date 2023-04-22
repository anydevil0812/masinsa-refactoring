#Selenium을 이용한 크롤링

#I. 환경설정
import datetime
import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys #키보드 입력을 위한 모듈
from selenium.webdriver.common.by import By #요소를 찾기 위한 모듈
from selenium.webdriver.support import expected_conditions as EC #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.common.exceptions import TimeoutException #요소가 로드되지 않을 때 예외처리를 위한 모듈
from selenium.webdriver.common.action_chains import ActionChains #마우스 이벤트를 위한 모듈

import os
import csv

warnings.filterwarnings('ignore')


driver = webdriver.Chrome('C:\\Users\\playdata\\Downloads\\chromedriver.exe')
driver.implicitly_wait(3)

url = 'https://smartstore.naver.com/echopear/products/4196059241'
driver.get(url)
time.sleep(1)

xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/ul' #리뷰 텍스트 xpath
review_xpath = '//*[@id="content"]/div/div[3]/div[3]/ul/li[2]/a' #리뷰 탭
next_xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/div/div/a[8]' #'다음' 버튼 xpath
filename = '입체형_뉴네퓨어_kf94_소형.csv' #저장할 파일명
pages = 1000 #몇 페이지 크롤링?
driver.find_element(By.XPATH, review_xpath).click()
time.sleep(1)

def get_review(xpath, next_xpath, num, filename):
  count = 0
  #if file with filename doesn't exist
  if not os.path.isfile(filename):
    with open(filename, 'w', encoding='utf-8') as f:
      #현제 페이지의 데이터 긁어오기
      for i in range(num):
        review_data = []
        reviews = driver.find_element(By.XPATH, xpath).text # returns a list of webelements
        # print(reviews.replace("\n", ""))
        review_data.append(reviews)

        #write to file using csvwriter
        csvwriter = csv.writer(f, escapechar='\\')
        csvwriter.writerow(review_data)
        # writer = csv.writer(f, escapechar='\\', quoting=csv.QUOTE_NONE)
        
        #다음 버튼 클릭
        # 첫 4페이지는 다음버튼의 xpath가 유동적이라서 따로 처리
        if count < 4:
          driver.find_element(By.XPATH, next_xpath).click()
          next_xpath = next_xpath[:-2] + str(int(next_xpath[-2]) + 1) + next_xpath[-1]
          count += 1

        # 이후 5페이지부터는 다음버튼의 xpath가 고정적이라 따로 처리
        else:
          new_next_xpath = next_xpath[:-3] + str(12) + "]"
          driver.find_element(By.XPATH, new_next_xpath).click()

  else :
    with open(filename, 'a', encoding='utf-8') as f:
      #현제 페이지의 데이터 긁어오기
      for i in range(num):
        review_data = []
        reviews = driver.find_element(By.XPATH, xpath).text # returns a list of webelements
        review_data.append(reviews.replace('\n', ' '))

        #write to file using csvwriter
        csvwriter = csv.writer(f, escapechar='\\')
        csvwriter.writerow(review_data)
        # writer = csv.writer(f, escapechar='\\', quoting=csv.QUOTE_NONE)
        
        #다음 버튼 클릭
        # 첫 4페이지는 다음버튼의 xpath가 유동적이라서 따로 처리
        if count < 4:
          driver.find_element(By.XPATH, next_xpath).click()
          next_xpath = next_xpath[:-2] + str(int(next_xpath[-2]) + 1) + next_xpath[-1]
          count += 1

        # 이후 5페이지부터는 다음버튼의 xpath가 고정적이라 따로 처리
        else:
          new_next_xpath = next_xpath[:-3] + str(12) + "]"
          driver.find_element(By.XPATH, new_next_xpath).click()

    
#실행
get_review(xpath, next_xpath , pages , filename)


