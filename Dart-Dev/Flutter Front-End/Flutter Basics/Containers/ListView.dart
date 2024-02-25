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
        appBar: null,
        body: Container(
          width: 200,
          child: ListView(
            scrollDirection: Axis.vertical,
            children: [

              ListTile(
                title: Text('Title'),
                subtitle: Text('Sub Title'),
                leading: Text('leading'),
                trailing: Text('trailing'),
              ),

              ListTile(
                title: Text('List Tile 2'),
                onTap: () => {
                  print('Tapped List Tile 2')
                },
              ),

              ListTile(
                title: Text('List Tile 3'),
                mouseCursor: MouseCursor.uncontrolled,
              ),

              ListBody(
                mainAxis: Axis.vertical,
                children: [
                  ListTile(
                    title: Text('ListBody->ListTile 1'),
                  ),

                  ListTileTheme(
                    child: Text('ListTileTheme'),
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}