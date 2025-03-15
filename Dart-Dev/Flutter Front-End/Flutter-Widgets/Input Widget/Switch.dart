// Flutter - Switch
import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  var value = false;
  void ToggleSwitch(bool value){
    this.setState(() {
      this.value = value;
      print('Switch Toggled : $value');
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: null,
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Text('Switch'),
              Switch(
                value: this.value,
                onChanged: (value)=>ToggleSwitch(value),
                activeColor: Colors.black,
                inactiveThumbColor: Colors.grey,
              ),

              Text('Switch 2'),

              Switch(
                value: this.value,
                onChanged: (value)=>ToggleSwitch(value),
              )
            ],
          ),
        )
      ),
    );
  }
}