# T-Kinter - Scroll Bar
from tkinter import *;
window = Tk()
window.geometry('500x500')

def scroll():
    print('scrolled : ',sb.get())

sb = Scrollbar(window,command=scroll,width=100).grid(row=1,column=1)

window.mainloop()