// Navigation - Drawer Routing
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
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  var current_item = 0;
  List<Widget> MyPage = [
    Container(
      child: Text('Page 1'),
    ),

    Container(
      child: Text('Page 2'),
    ),

    Container(
      child: Text('Page 3'),
    ),
  ];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: AppBar(title: Text('Drawer Routing'),),
        drawer: Drawer(
          backgroundColor: Colors.grey,
          child: ListView(
            children: [
              ListTile(
                title: Text('Page 1'),
                leading: Icon(
                  Icons.line_axis
                ),
                onTap: () => {
                  this.setState(() {
                    current_item = 0;
                    Navigator.pop(context);
                  })
                },
              ),

              ListTile(
                title: Text('Page 2'),
                leading: Icon(
                  Icons.square
                ),
                onTap: () => {
                  this.setState(() {
                    current_item = 1;
                    Navigator.pop(context);
                  })
                },
              ),

              ListTile(
                title: Text('Page 3'),
                leading: Icon(
                  Icons.circle
                ),
                onTap: () => {
                  this.setState(() {
                    current_item = 2;
                    Navigator.pop(context);
                  })
                },
              ),
            ],
          ),
        ),

        body: Center(
          child: MyPage[current_item],
        ),
      ),
    );
  }
}