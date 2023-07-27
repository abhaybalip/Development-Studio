// FLutter - CheckBox

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var color = Colors.red,color1 = Colors.black;
  var value = false,value1 = false;
  var shape = BoxShape.circle;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my_flutter_app',
      home: Scaffold(
        appBar: null,
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Center(
                child: Container(
                  child: null,
                  height: 200,
                  width: 200,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: color,
                  ),
                ),
              ),
              Checkbox(
                value: value,
                onChanged: (newValue) {
                  setState(() {
                    value = newValue!;
                    color = value ? Colors.amber : Colors.red;
                  });
                },
              ),

              Center(
                child: Container(
                  child: null,
                  height: 200,
                  width: 200,
                  decoration: BoxDecoration(
                    shape: this.shape,
                    color: color1,
                  ),
                ),
              ),

              Checkbox(
                value: value1,
                onChanged: (newValue1) {
                  setState(() {
                    value1 = newValue1!;
                    shape = value1 ? BoxShape.rectangle : BoxShape.circle;
                  });
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}