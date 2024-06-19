import pandas as pd
import numpy as np
import matplotlib as plt
import math
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

men=pd.read_csv('./dataset/survey.csv')
# men

men['self_employed']=men.self_employed.fillna('No')
# men

men=men.drop(["Timestamp","Country","state","no_employees","comments"],axis=1)

treat=men.pop('treatment')
men['treatment']=treat
# men

men['work_interfere'].unique()

men['work_interfere'].mode()

men['work_interfere'] = men['work_interfere'].fillna('Sometimes')
# men

# for col in men:
#     print(men[col].unique())

men.isna().sum()

def encode_gender(x):
    if x.lower()[0] == 'f':
        return 0
    elif x.lower()[0] == 'm':
        return 1
    else:
        return 2

men['Gender'] = men['Gender'].apply(encode_gender)

# men.head(10)

def encode_binary(x):
    if x.lower() == 'yes':
        return 1
    else:
        return 0

men['self_employed'] = men['self_employed'].apply(encode_binary)
men['family_history'] = men['family_history'].apply(encode_binary)
men['remote_work'] = men['remote_work'].apply(encode_binary)
men['tech_company'] = men['tech_company'].apply(encode_binary)
men['obs_consequence'] = men['obs_consequence'].apply(encode_binary)
men['treatment'] = men['treatment'].apply(encode_binary)

# men.head(15)



def encode_ternary(x):
    if x.lower() == 'yes':
        return 1
    elif x.lower() == 'no':
        return 0
    else:
        return 2

men['care_options'] = men['care_options'].apply(encode_ternary)
men['wellness_program'] = men['wellness_program'].apply(encode_ternary)
men['seek_help'] = men['seek_help'].apply(encode_ternary)
men['anonymity'] = men['anonymity'].apply(encode_ternary)
men['phys_health_consequence'] = men['phys_health_consequence'].apply(encode_ternary)
men['mental_health_consequence'] = men['mental_health_consequence'].apply(encode_ternary)
men['coworkers'] = men['coworkers'].apply(encode_ternary)
men['supervisor'] = men['supervisor'].apply(encode_ternary)
men['mental_health_interview'] = men['mental_health_interview'].apply(encode_ternary)
men['phys_health_interview'] = men['phys_health_interview'].apply(encode_ternary)
men['mental_vs_physical'] = men['mental_vs_physical'].apply(encode_ternary)
men['benefits'] = men['benefits'].apply(encode_ternary)
men

men['leave'].unique()

men['work_interfere'].unique()

def encode_quad(x):
    if x.lower() == 'never':
        return 0
    elif x.lower() == 'rarely':
        return 1
    elif x.lower() == 'sometimes':
        return 2
    else:
        return 3

def encode_pent(x):
    if x.lower() == 'very easy':
        return 0
    elif x.lower() == 'somewhat easy':
        return 1
    elif x.lower() == 'don\'t know':
        return 2
    elif x.lower() == 'somewhat difficult':
        return 3
    else:
        return 4

men['work_interfere'] = men['work_interfere'].apply(encode_quad)

men['leave'] = men['leave'].apply(encode_pent)

# men


# men.to_csv('output.csv', encoding = 'utf-8-sig')

list(men.columns)

X=men.iloc[:,:-1].values
# print(X)

Y=men.iloc[:,-1].values
# print(Y)

from sklearn.model_selection import train_test_split 
x_train, x_test, y_train, y_test= train_test_split(X, Y, test_size= 0.40,random_state=0)

from sklearn.preprocessing import StandardScaler    
st_x= StandardScaler()    
x_train= st_x.fit_transform(x_train)    
x_test= st_x.transform(x_test)

classifier = LogisticRegression()  
classifier.fit(x_train, y_train)

y_pred= classifier.predict(x_test) 
# y_pred

classifier.predict([[37,0,0,0,3,0,1,1,2,0,1,1,1,0,0,2,1,0,2,1,0]])

classifier.predict([[31,1,0,1,3,0,1,0,1,0,0,0,2,1,1,2,0,2,2,0,1]])

classifier.predict([[44,1,0,0,1,0,0,2,0,2,2,2,2,2,0,0,0,0,0,2,0]])

classifier.predict([[26,1,0,0,2,0,1,0,0,0,0,2,1,0,0,2,2,0,0,2,0]])

score = classifier.score(x_test, y_test)
print(score)
