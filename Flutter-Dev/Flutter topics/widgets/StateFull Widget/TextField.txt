// Flutter - TextField

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      title: 'flutter app',

      home: Scaffold(
        appBar: null,

        body: Center(
          child: Column(
            children: [
              const TextField(
                decoration: InputDecoration(
                  iconColor: Colors.red,
                  focusColor: Colors.pink,
                  hoverColor: Colors.pinkAccent,
                  labelText: 'lable-text',
                  hintText: 'helper-text',
                  errorText: 'error-text',
                  border: InputBorder.none
                ),
              ),

              TextField(
                decoration: const InputDecoration(
                  labelText: 'lable-text',
                  focusedBorder: InputBorder.none,
                  border: OutlineInputBorder()
                ),
                onChanged:(value)=>{
                  print(value)
                },
                onTap: ()=>{
                  print('text field tapped')
                },
              ),

              const TextField(
                textInputAction: TextInputAction.continueAction,
                decoration: InputDecoration(
                  hintText: 'hint-text'
                ),
                // onSubmitted:(value)=>{
                //   print(value);
                // },
              )
            ],
          ),
        )
      ),
    );
  }
}