// Flutter - Row & Column

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(MyApp());

}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my-flutter-app',

      home: Scaffold(
        appBar: AppBar(
          title: Text('App Bar')
        ),

        body: Container(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Container(
                    child: Text('container'),
                  ),
                  Container(
                    child: Text('container'),
                  ),
                  Container(
                    child: Text('container'),
                  )
                ],
              ),

              Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    child: Text('container'),
                  ),
                  Container(
                    child: Text('container'),
                  ),Container(
                    child: Text('container'),
                  )
                ],
              ),              
            ],
          )
        ),
      ),
    );
  }
}