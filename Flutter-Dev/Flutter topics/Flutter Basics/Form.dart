// FLutter - Form

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter-app',

      home: Scaffold(
        appBar: null,

        body: Container(
          child: MyForm(title:'my-form'),
        ),
      ),
    );
  }
}

Widget MyForm({required String title}){
  return(
    Form(
      child: Column(
        children: [
          Text(title),
          TextField(),
          TextField(),

          InkWell(
            radius: 20,
            child: Text('submit'),

            onTap: (){
              print('Form-Submitted');
            },
          )
        ],
      )
    )
  );
}