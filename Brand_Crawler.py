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

url = 'https://brand.naver.com/cla/products/6450052240?NaPm=ct%3Dlb4gpl34%7Cci%3D23097fe7313cf89f313c0acbcfc862f2d4565f70%7Ctr%3Dslbrc%7Csn%3D410825%7Chk%3Deeef0f11d6c376ec300907bfd77cfe011c15c8b9'
driver.get(url)
time.sleep(1)

xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/ul' #리뷰 텍스트 xpath
num_xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/div/div/a[3]' #숫자 2번 버튼에 해당
# //*[@id="REVIEW"]/div/div[3]/div[2]/div/div/a[4]
review_xpath = '//*[@id="content"]/div/div[3]/div[3]/ul/li[2]/a' #리뷰 탭
filename = '새부리형_CLA_KF94ㅇㅇ_대형.csv' #저장할 파일명
pages = 1000 #몇 페이지 크롤링?
driver.find_element(By.XPATH, review_xpath).click()
time.sleep(1)

def get_review(xpath, num_xpath, num, filename):
  count = 0
  #if file with filename doesn't exist
  if not os.path.isfile(filename):
    with open(filename, 'w', encoding='utf-8') as f:
      #현제 페이지의 데이터 긁어오기
      num_count = 2
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
        #브랜드관의 경우 다음 버튼이 10페이지 단위로 넘어감(1->11) -> 따라서 숫자버튼을 2~10까지 클릭해주고 다음 버튼을 클릭해야함
        driver.find_element(By.XPATH, num_xpath).click()
        num_count += 1

        #change the last number of the xpath to num_count
        num_xpath = num_xpath[:46] + str(num_count) + ']'

        if num_count == 12 : #다음 버튼(12번)이 클릭되었을 경우, 누를 버튼번호를 초기화
          num_count = 2        

  else :
    with open(filename, 'a', encoding='utf-8') as f:
      #현제 페이지의 데이터 긁어오기
      num_count = 2
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
        #브랜드관의 경우 다음 버튼이 10페이지 단위로 넘어감(1->11) -> 따라서 숫자버튼을 2~10까지 클릭해주고 다음 버튼을 클릭해야함
        driver.find_element(By.XPATH, num_xpath).click()
        num_count += 1

        #change the last number of the xpath to num_count
        num_xpath = num_xpath[:46] + str(num_count) + ']'

        if num_count == 12 : #다음 버튼(12번)이 클릭되었을 경우, 누를 버튼번호를 초기화
          num_count = 2        



#실행
get_review(xpath, num_xpath , pages , filename)


