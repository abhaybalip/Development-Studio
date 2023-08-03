# T-Kinter - ListBox
from tkinter import *;

window = Tk()
window.geometry('500x500')

l = Listbox(window,background='grey',justify=LEFT,)
l.insert(0,'India')
l.insert(1,'USA')
l.insert(2,'UK')
l.pack()

btn = Button(window,text="Del",command=lambda listbox=l: listbox.delete(ANCHOR)).pack()

window.mainloop()