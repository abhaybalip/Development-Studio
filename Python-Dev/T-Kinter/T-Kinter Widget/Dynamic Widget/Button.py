# T-Kinter - Button
from tkinter import *;

window = Tk()
window.geometry('400x300')

def click():
    print('Button clicked')

b = Button(activebackground='pink' ,background='red',text='button',height=2,width=4,command=click).grid(row=1,column=1)
b = Button(activeforeground='grey' ,background='green',text='button',height=2,width=4,command=click).grid(row=1,column=2)
b = Button(background='blue',text='button',height=2,width=4,command=click).grid(row=1,column=3)

window.mainloop()