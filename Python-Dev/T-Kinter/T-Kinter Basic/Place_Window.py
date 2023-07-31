# T-Kinter - Place Widget
from tkinter import *;

window = Tk(className='window',)

l = Label(window,text='label1').place(height=10,width=10)
l1 = Label(window,text='label2').place(x=80,y=50)
l2  = Label(window,text='label3').place(relx=0.5, rely=0.5)
l3 = Label(window,text='label4').place(anchor=CENTER)

window.mainloop()