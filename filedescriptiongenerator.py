import json
import jsonify
from tkinter import Tk
from tkinter.filedialog import askopenfilename
from tkinter import messagebox


Links =[]#{"url":url,"description":description}
content = []#{"paragraphumber":pnumber,"paracontent":content,"textsize":1,"style":cssstyle}
OtherTags = []
messagebox.showinfo("Information", "Please select a file name")
filename = askopenfilename()
outputfile = open(filename,"a")



while True: ## Works
    url = input("Please enter a url")
    description = input("Please enter a description")
    Links.append({"url":url,"description":description}) 
    if messagebox.askokcancel(title="URL",message="Do you have any more to enter"):
        continue
    else:
        break
while True:
    print("For Header specify 0 and header")
    paragraphnumber = input(" enter a paragraphnumber")
    paracontent = input("Please enter content")
    parastyle = input("Please enter css style / enter to skip")
    content.append({"pnumber":paragraphnumber,"paracontent":paracontent,"customstyle":parastyle})
    
    if messagebox.askokcancel(title="URL",message="Do you have any more to enter"):
        continue
    else:
        break
while True: # could do while tbf
    if messagebox.askokcancel(title="URL",message="Do you have any custom tags to enter") == False:
        break
    else:
        TagType = input(" Enter Custom Tag")
        InternalParameters = input("Please enter InternalParameters like src=")
        OtherStyle = input("Please enter css style / enter to skip")
        OtherTags.append({"TagType":TagType,"InternalParams":InternalParameters,"OtherStyle":OtherStyle})

outputfile.write(str(Links+content + OtherTags))

outputfile.close()