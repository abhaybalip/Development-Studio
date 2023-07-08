// Flutter - Widget structure

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'App - title',

      home: Scaffold(
        appBar: AppBar(
          title : Text('App - bar')
        ),

        // App - Body - container - child : column - children
        body: Container(
          child: const Column(
            children: [
              Text('column child 1'),
              Text('column child 2'),
              Text('column child 3'),
              
              // column - row
              Row(
                children: [
                  Text('row child 1'),
                  Text('row child 2'),
                  Text('row child 3'),
                ],
              )
            ]
          ),
        ),
      ),
    );
  }
}