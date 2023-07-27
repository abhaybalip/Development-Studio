// Flutter - RadioButton

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  int selectedRadioValue = 0;
  void change(value) {
    setState(() {
      selectedRadioValue = value;
    });
  }

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
              ListTile(
                title: Text('Option 1'),
                leading: Radio(
                  value: 1,
                  groupValue: selectedRadioValue,
                  onChanged: change,
                ),
              ),
              ListTile(
                title: Text('Option 2'),
                leading: Radio(
                  value: 2,
                  groupValue: selectedRadioValue,
                  onChanged: change,
                ),
              ),
              ListTile(
                title: Text('Option 3'),
                leading: Radio(
                  value: 3,
                  groupValue: selectedRadioValue,
                  onChanged: change,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}