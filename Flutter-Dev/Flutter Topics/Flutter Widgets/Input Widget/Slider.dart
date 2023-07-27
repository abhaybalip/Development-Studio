// Flutter - Slider
import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  var value = 0.0;
  void changed(double value){
    this.setState(() {
      this.value = value;
    });
    print('New Value : $value');
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
              Slider(
                value: this.value,
                label: 'slider',
                min: 0.0,
                max: 100.0,
                onChanged: (value) => changed(value)
              )
            ],
          )
        ),
      ),
    );
  }
}