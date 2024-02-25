// Flutter - DialogBox

import 'dart:js';

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
    return const MaterialApp(
      title: 'flutter-app',

      home: Scaffold(
        appBar: null,

        body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            AlertDialog(
              title: Text('Alert Box'),
              icon: Text('icon'),
              actions: [
                InkWell(
                  child: Text('Close'),
                  onTap: null
                )
              ],
            )
          ],
        )
      ),
    );
  }
}