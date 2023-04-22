#"재구매 태그를 없애주는 함수"
def remove_tags(dataframe):
  #if "재구매" is within first 10 characters, remove "재구매" and everything before it
    #review_content의 첫 8글자 내에 "재구매"가 있으면 "재구매"와 그 앞의 모든 글자를 지워줌
  dataframe['review_content\r'] = dataframe['review_content\r'].apply(lambda x: x.lstrip('재구매') if '재구매' in x[:8] else x)
  return dataframe

#중복된 리뷰를 제거하는 함수
  #버전 1. 리뷰 텍스트 기준으로 중복 제거 -> 메모리를 지나치게 잡아먹을수도(?) -> 충분히 돌아가는듯
def remove_duplicate(dataframe):
  #remove duplicate rows
  dataframe.drop_duplicates(subset=['review_content\r'], keep='first', inplace=True) 
    #subset : 중복을 제거할 기준이 되는 열, keep : 중복된 데이터 중 어떤 것을 남길지
  return dataframe

  #버전 2. id기준으로 중복 제거
# def remove_duplicate2(dataframe):
#   #remove duplicate rows with same id that have matching review_content\r up to 10 first characters
#   for i in range(len(dataframe)):
#     for j in range(i+1, len(dataframe)):
#       if dataframe['id'][i] == dataframe['id'][j] and dataframe['review_content\r'][i][:10] == dataframe['review_content\r'][j][:10]:
#         dataframe.drop(j, inplace=True)
#   return dataframe


def preprocess(filename, new_filename):
  # open csv and convert to dataframe
  import pandas as pd
  df = pd.read_csv(filename, encoding='utf-8', lineterminator='\n') #https://stackoverflow.com/questions/33998740/error-in-reading-a-csv-file-in-pandascparsererror-error-tokenizing-data-c-err

  #apply remove_tags to "review_content\r" column
  df = remove_tags(df)

  #remove duplicate rows
  df = remove_duplicate(df)

  #save the new dataframe as a csv
  df.to_csv(new_filename, encoding='utf-8')



filename = "새부리형_블루본_소형_after.csv"
new_filename = "새부리형_블루본_소형_after2.csv"

preprocess(filename, new_filename)