// Flutter - App structure

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      // title for app
      title: 'App Title : App for learning flutter',

      // app
      home: Scaffold(

        // app bar
        appBar: AppBar(
          title: const Text('App Title'),
          backgroundColor: Colors.yellow,
          foregroundColor: Colors.black,
        ),

        // app body
        body: Container(
          // container properties
          alignment: Alignment.center,
          color: Colors.lightBlue,

          // child widget
          child: const Text('This is Text data'),
        ),

        // bottom bar
        bottomNavigationBar: Container(
          color: Colors.red,
          child:  Text('bottom nav bar'),
        )
      )
    );
  }
}