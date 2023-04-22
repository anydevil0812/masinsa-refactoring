### 전체 마스크 모두 잘 돌아감 !!🤩🤩

# - ⭐처음에 컬럼에 NaN만 있는 row는 원래 값이 없는 경우일듯 .. (리뷰00,000건 ~~~ 어쩌구 있던 부분)
#     - score가 남은 것은 리뷰수 맨앞의 숫자가 들어간듯함
# - utf-8 or cp949 확인필요 !
# - 옵션명 마스크마다 확인필요 !

# - 특이사항 : "덴탈마스크_그린비" 는 "\n 평점\n" 으로 하면 그린비가 제대로 split안됨
#               - "평점"으로 나누어줘야만 제대로 됨 .. (왜인지는  모르겠음)
#               - 그거 아니면 20개-40개 정도만 추출되고, 마지막 row에 모든 정보가 들어감 ㅠㅠ

import re

def get_review_info(review_str):

  #1. 평점 추출 
  #1-1 처음 나오는 숫자를 추출
  score = re.search(r"\d", review_str).group()
  #1-2 첫 \d\n을 찾아서 그 앞까지 슬라이싱
  review_str = review_str[review_str.find(score+"\n")+2:]
  # print(review_str)

  #2. id 추출
  #2-1 시작부터 *가 끝나는 부분까지 추출
  pattern = re.compile(".*\*")
#   print(review_str)
  id = ''
#   id = pattern.search(review_str).group() # ❗ Error : 'NoneType' object has no attribute 'group'  // 검색결과가 없다는 것 !
  if pattern.search(review_str):
      id = pattern.search(review_str).group()

      # print(id)
      #2-2 id를 제외한 나머지 문자열 추출
      review_str = review_str[review_str.find(id)+len(id):]
      # print(review_str)
  
  #3. option 추출
  #3-1 "\n 선택: ....\n"이 존재한다면 추출
  pattern1 = re.compile("선택: .*")  #⭐마스크 회사마다 옵션이 다른 경우가 존재함 !!! 확인 후, 패턴바꿔주기
  pattern2 = re.compile("타입: .*")
  pattern3 = re.compile("사이즈: .*")
  pattern4 = re.compile("색상: .*")
  pattern5 = re.compile("상품명: .*")
  pattern6 = re.compile("마스크: .*")
  pattern7 = re.compile("그린비: .*")
  pattern8 = re.compile("에이큐브살: .*")
  pattern9 = re.compile("참존: .*")
  pattern10 = re.compile("종류: .*")

  patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7, pattern8, pattern9]

  option1 = pattern1.search(review_str)
  option2 = pattern2.search(review_str)
  option3 = pattern3.search(review_str)
  option4 = pattern4.search(review_str)
  option5 = pattern5.search(review_str)
  option6 = pattern6.search(review_str)
  option7 = pattern7.search(review_str)
  option8 = pattern8.search(review_str)
  option9 = pattern9.search(review_str)
  option10 = pattern10.search(review_str)

  option = ''

  if option1:
    option = option1.group()
    # print(option)
    option = option.replace("선택: ", '')
    #3-2 option을 제외한 나머지 문자열 추출
    review_str = review_str[review_str.find(option)+len(option):]
    # print(review_str)
  elif option2:
    option = option2.group()
    option = option.replace("타입: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option3:
    option = option3.group()
    option = option.replace("사이즈: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option4:
    option = option4.group()
    option = option.replace("색상: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option5:
    option = option5.group()
    option = option.replace("상품명: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option6:
    option = option6.group()
    option = option.replace("마스크: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option7:
    option = option7.group()
    option = option.replace("그린비: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option8:
    option = option8.group()
    option = option.replace("에이큐브살: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option9:
    option = option9.group()
    option = option.replace("참존: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  elif option10:
    option = option10.group()
    option = option.replace("종류: ", '')
    review_str = review_str[review_str.find(option)+len(option):]

  #4. review_content 추출
  #4-1
  #if \n 더보기\n 존재시 해당 부분 전까지 추출
  #elif \n 사진/비디오 수\n 존재시 해당 부분 전까지 추출
  #elif \n 이미지 펼쳐보기\n  존재시 해당 부분 전까지 추출
  #elif \n 리뷰 더보기/접기\n 존재시 해당 부분 전까지 추출
  #else 전체 문자열 추출
  if "\n 더보기\n" in review_str:
    review_content = review_str[:review_str.find("\n 더보기\n")]
  elif "\n 사진/비디오 수\n" in review_str:
    review_content = review_str[:review_str.find("\n 사진/비디오 수\n")]
  elif "\n 이미지 펼쳐보기\n" in review_str:
    review_content = review_str[:review_str.find("\n 이미지 펼쳐보기\n")]
  elif "\n 리뷰 더보기/접기\n" in review_str:
    review_content = review_str[:review_str.find("\n 리뷰 더보기/접기")]
  else:
    review_content = review_str
#   print(review_content)

  review_content = re.sub('\n \d{2}.\d{2}.\d{2}.\n 신고\n','', review_content)
  review_content = re.sub('리뷰 더보기/접기','', review_content)
  review_content = re.sub('\n \d{0,10}','', review_content)
  review_content = re.sub('"리뷰 \d{0,3},\d{0,5}건','', review_content)
  review_content = re.sub('리뷰 \d{0,3},\d{0,5}건','', review_content)
  review_content = re.sub('리뷰 \d{0,3}건','', review_content)
  review_content = re.sub('#\D{2} 택배','',review_content)
  review_content = re.sub('이전\d{0,50}다음','',review_content)

  review_content = review_content.replace('랭킹순최신순평점 높은순평점 낮은순전체보기포토/동영상스토어PICK한달사용리뷰','')
  review_content = review_content.replace('\n 최신순\n 평점 높은순\n 평점 낮은순\n 전체보기\n 포토/동영상\n 스토어PICK\n 한달사용리뷰\n','')
  review_content = review_content.replace('조건에 맞는 리뷰가 없습니다.선택한 필터를 변경해 보세요.','')
  review_content = review_content.replace('#사이즈','')
  review_content = review_content.replace('#가격','')
  review_content = review_content.replace('#청결도','')
  review_content = review_content.replace('#디자인','')
  review_content = review_content.replace('#품질','')
  review_content = review_content.replace('#재질','')
  review_content = review_content.replace('#통풍성','')
  review_content = review_content.replace('상품옵션','')
  review_content = review_content.replace('"','')
  review_content = review_content.replace('이 구매자의 처음 리뷰보기', '')
  review_content = review_content.replace('한달사용기', '')
  review_content = review_content.replace('동영상콘텐츠', '')
  review_content = review_content.replace('이미지 펼쳐보기', '')
  review_content = review_content.replace('옵션명 더보기', '')
  review_content = review_content.replace('BEST', '')
  review_content = review_content.replace('/', '')
  review_content = review_content.replace(')', '')
  review_content = review_content.replace('사진비디오 수', '')
  review_content = review_content.replace('\n', '')

  # 판매자 답변 없애기
  if re.search(r'판매자',review_content):
      start_index = re.search(r'판매자',review_content).start()
      review_content = review_content[:start_index] 


# 재구매없애기 # ❗❗없애버리면 리뷰내용에서 사라지는 경우가 빈번..
#   if re.search(r'재구매',review_content):
#       # start_index = re.search(r'재구매',review_content).start()
#       end_index = re.search(r'재구매',review_content).end()
#       review_content = review_content[end_index:] 

#   print(review_content)
#   print(score)
#   print(id)
#   print(option)

  review_list = []
  review_list.append(score)
  review_list.append(id)
  review_list.append(option)
  review_list.append(review_content)

#   print(review_list)

  return review_list

  
def preprocess_reviews(filename, new_filename):
    #1. read
    try :
        # ⭐ 파일 encoding이 utf-8 아니면 cp949 
        with open (filename, "r", encoding="utf-8") as f:  # utf-8 에러뜨면 cp949로 열기
            reviews = f.readlines()
            reviews = " ".join(reviews)
        #2. 개별 review로 나눠서 list에 저장
            reviews = reviews.split("\n 평점\n")
    except:
        with open (filename, "r", encoding="cp949") as f: 
            reviews = f.readlines()
            reviews = " ".join(reviews)
        #2. 개별 review로 나눠서 list에 저장
            reviews = reviews.split("\n 평점\n")

    #3. 개별 review에서 필요한 정보 추출
    db_review = []
    error_count = 0
    for i, review in enumerate(reviews):
        ## 에러확인용
        # print(review)
        # db_review.append(get_review_info(review))
        try :
            db_review.append(get_review_info(review))
        except:
            error_count += 1
            # print("error occured at index: ", i)
            # print(review)
            # print("=============================================")
    print("error count: ", error_count)
    # print(db_review)
    
    #4. write each reivew in db_review list to a new csv file
    import csv
    with open(new_filename, "w", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["score", "id", "option", "review_content"])
        for review in db_review:
            try :
                writer.writerow(review)
            except:
                print("error occured")
                print(review)
                print("=============================================")
    print("done")

# preprocess_reviews("원본파일경로", "저장파일경로")
preprocess_reviews("/content/before_csv/덴탈마스크_가드플러스.csv", "/content/after_csv/덴탈마스크_가드플러스_after.csv")
preprocess_reviews("/content/before_csv/덴탈마스크_그린비.csv", "/content/after_csv/덴탈마스크_그린비_after.csv")
preprocess_reviews("/content/before_csv/덴탈마스크_씨엔에이치.csv", "/content/after_csv/덴탈마스크_씨엔에이치_after.csv")
preprocess_reviews("/content/before_csv/새부리형_CLA_KF94_대형.csv", "/content/after_csv/새부리형_CLA_KF94_대형_after.csv")
preprocess_reviews("/content/before_csv/새부리형_블루본_소형.csv", "/content/after_csv/새부리형_블루본_소형_after.csv")
preprocess_reviews("/content/before_csv/새부리형_아에르_KF80_대중소.csv", "/content/after_csv/새부리형_아에르_KF80_대중소_after.csv")
preprocess_reviews("/content/before_csv/새부리형_에버뉴그린_kf94_대형소형.csv", "/content/after_csv/새부리형_에버뉴그린_kf94_대형소형_after.csv")
preprocess_reviews("/content/before_csv/새부리형_에어데이즈_KF94_대중소특대와이드.csv", "/content/after_csv/새부리형_에어데이즈_KF94_대중소특대와이드_after.csv")
preprocess_reviews("/content/before_csv/새부리형_참존_KF94_대중소와이드.csv", "/content/after_csv/새부리형_참존_KF94_대중소와이드_after.csv")
preprocess_reviews("/content/before_csv/입체형_네퓨어_Kfad_소형.csv", "/content/after_csv/입체형_네퓨어_Kfad_소형_after.csv")
preprocess_reviews("/content/before_csv/입체형_뉴네퓨어_kf94_대형.csv", "/content/after_csv/입체형_뉴네퓨어_kf94_대형_after.csv")
preprocess_reviews("/content/before_csv/입체형_뉴네퓨어_kf94_소형.csv", "/content/after_csv/입체형_뉴네퓨어_kf94_소형_after.csv")
preprocess_reviews("/content/before_csv/입체형_닥터퓨리_kf80_대형.csv", "/content/after_csv/입체형_닥터퓨리_kf80_대형_after.csv")
preprocess_reviews("/content/before_csv/입체형_닥터퓨리_kf94_대형중형소형소소형.csv", "/content/after_csv/입체형_닥터퓨리_kf94_대형중형소형소소형_after.csv")
preprocess_reviews("/content/before_csv/입체형_에어퀸_kfad_대형.csv", "/content/after_csv/입체형_에어퀸_kfad_대형_after.csv")
preprocess_reviews("/content/before_csv/입체형_웰킵스_kf80_대형.csv", "/content/after_csv/입체형_웰킵스_kf80_대형_after.csv")
preprocess_reviews("/content/before_csv/입체형_웰킵스_kf94_대중소초소.csv", "/content/after_csv/입체형_웰킵스_kf94_대중소초소_after.csv")
preprocess_reviews("/content/before_csv/입체형_클린앤영_kf94_대형.csv", "/content/after_csv/입체형_클린앤영_kf94_대형_after.csv")
preprocess_reviews("/content/before_csv/입체형_하나필터_kfad_대형.csv", "/content/after_csv/입체형_하나필터_kfad_대형_after.csv")