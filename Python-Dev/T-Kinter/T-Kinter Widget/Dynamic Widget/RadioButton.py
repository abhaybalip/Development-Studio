# T-Kinter - Radio Button
from tkinter import *;

window = Tk()

var = StringVar(value="Option 1")

def radio_function():{
    print('radio value changed : ',var.get())
}

rb1 = Radiobutton(window, text="Option 1", variable=var, value="Option 1",command=radio_function).pack()
rb2 = Radiobutton(window, text="Option 2", variable=var, value="Option 2",command=radio_function).pack()
rb3 = Radiobutton(window, text="Option 3", variable=var, value="Option 3",command=radio_function).pack()

window.mainloop()