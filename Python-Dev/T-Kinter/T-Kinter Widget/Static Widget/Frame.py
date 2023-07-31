# T-Kinter - Frame
from tkinter import *;

window = Tk()
window.geometry('500x500')

f = Frame(window,height=200,width=200).pack()
c = Canvas(f,background='grey').pack()

window.mainloop()