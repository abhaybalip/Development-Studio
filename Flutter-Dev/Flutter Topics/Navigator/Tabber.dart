import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key); // Fix #1: Use 'Key? key' instead of 'super.key'

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with SingleTickerProviderStateMixin { // Fix #2: Add SingleTickerProviderStateMixin
  late TabController _tabController; // Add a late declaration for TabController

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this); // Use 'this' as the vsync parameter
  }

  @override
  void dispose() {
    _tabController.dispose(); // Dispose the TabController
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '',
      home: Scaffold(
        appBar: AppBar( // Fix #3: Provide an AppBar for the Scaffold
          title: Text('Tabs Example'),
        ),
        body: Container(
          child: TabBar(
            controller: _tabController, // Use the created TabController
            mouseCursor: MouseCursor.uncontrolled,
            tabs: [
              Tab(
                text: 'Tab1',
                icon: Text('😊'),
              ),
              Tab(
                // text: 'Tab2',
                icon: Text('😘'),
                child: Text('Tab2'),
              ),
              Tab(
                text: 'Tab2',
                icon: Text('😁'),
              )
            ],
          ),
        ),
      ),
    );
  }
}