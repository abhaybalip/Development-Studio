// Flutter - ToolTip
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
      title: 'flutter_app',
      home: Scaffold(
        appBar: null,
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Text('Tool-Tip'),

              Container(
                child: Tooltip(
                  message: 'tool-tip message',
                  child: Text('❤️'),
                  showDuration: Duration(seconds: 1),
                  onTriggered: (){
                    print('tool-tip triggered');
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}