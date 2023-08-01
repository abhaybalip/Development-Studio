# 
from tkinter import *
window = Tk()

var = StringVar()
def scale_function():
    print('scale changed : ', var.get())

scale = Scale(window,variable=var,from_=0,to=10,name='scale',orient=HORIZONTAL,bg='grey',command=scale_function).grid(row=1,column=1)

window.mainloop()