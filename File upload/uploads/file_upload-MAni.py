name =input('Enter your name: ')
name1=name.lower()
code1=1234
code=int(input('Enter the code: '))
myDict={
    'mani':'Muktarul hoque',
    'tufan':'Manjarul hoque',
    'facebook':'M@n!007',
    'gmail':'M@n1@007'

}
if code==code1:
    print("you can access")
    if name1 in myDict.keys():
        print('your name is in list')
        apps = 'facebook', 'gmail'

        text = input(f"which password you want to know{apps}?")
        text.lower()
        if text.lower() in myDict.keys():
            print(f'your {text} password is {myDict.get(text.lower())}')
        else:
            print('your input is not in list')
    else:
        print('sorry your name is not in the list')
else:
    print("your code is in correct")





