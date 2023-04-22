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
  id = pattern.search(review_str).group()
  # print(id)
  #2-2 id를 제외한 나머지 문자열 추출
  review_str = review_str[review_str.find(id)+len(id):]
  # print(review_str)
  
  #3. option 추출
  #3-1 "\n 선택: ....\n"이 존재한다면 추출
  pattern = re.compile("\n 선택: .*")
  option = pattern.search(review_str)
  if option:
    option = option.group()
    # print(option)
    #3-2 option을 제외한 나머지 문자열 추출
    review_str = review_str[review_str.find(option)+len(option):]
    # print(review_str)

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
    review_content = review_str[:review_str.find("\n 리뷰 더보기/접기\n")]
  else:
    review_content = review_str
  # print(review_content)

  return [score, id, option, review_content]

  
def preprocess_reviews(filename, new_filename):
    #1. read
    with open (filename, "r", encoding="utf-8") as f:
        reviews = f.readlines()
        reviews = " ".join(reviews)
    #2. 개별 review로 나눠서 list에 저장
        reviews = reviews.split("\n 평점\n")
    #3. 개별 review에서 필요한 정보 추출
    db_review = []
    error_count = 0
    for i, review in enumerate(reviews):
        try :
            db_review.append(get_review_info(review))
        except:
            error_count += 1
            # print("error occured at index: ", i)
            # print(review)
            # print("=============================================")
    print("error count: ", error_count)
    
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


preprocess_reviews("새부리형_블루본_소형.csv", "새부리형_블루본_소형_preprocessed.csv")