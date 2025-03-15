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
      title: 'my_flutter_app',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Drawer'),
        ),
        drawer: Drawer(
          child: ListView(
            scrollDirection: Axis.vertical,
            children:[
              ListTile(
                title: Text('List Tile 1'),
                mouseCursor: MouseCursor.uncontrolled,
              ),
              ListTile(
                title: Text('List Tile 2'),
                onTap: (){
                  print('Tapped list Tile 2');
                },
              ),
              ListTile(
                title: Text('List Tile 3'),
              )
            ]
          )
        ),
        body: null
      ),
    );
  }
}