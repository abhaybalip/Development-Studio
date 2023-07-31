# T-Kinter - Entry
from tkinter import *;

window = Tk()
window.geometry('500x500')

def scroll():
    print('Data Entered')

e = Entry(window,width=25,background='grey',).grid(row=1,column=1)

window.mainloop()