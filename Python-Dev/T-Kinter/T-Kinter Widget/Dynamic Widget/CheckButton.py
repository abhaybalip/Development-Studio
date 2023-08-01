# T-Kinter - Checkbutton
from tkinter import *;

window = Tk()
window.geometry('500x500')

var1 = BooleanVar()
var2 = BooleanVar()

def check_function(var):{
    print('value = ',var.get())
}

cb = Checkbutton(window,variable=var1,height=2,width=5,text='option 1',command=check_function(var1)).grid(row=1,column=1)
cb1 = Checkbutton(window,height=2,width=5,variable=var2,text='option 2',command=check_function(var2)).grid(row=1,column=2)
cb2 = Checkbutton(window,height=2,width=5,variable=var2,text='option 3',command=check_function(var2)).grid(row=1,column=2)

window.mainloop()