// Flutter - Table
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
        body: Center(
          child: Table(
            border: TableBorder.all(),
            textBaseline: TextBaseline.alphabetic,
            defaultColumnWidth: FlexColumnWidth(2),
            children: [
              TableRow(
                children: [
                  TableCell(child: Text('row 1 data 1')),
                  TableCell(child: Text('row 1 data 2')),
                  TableCell(child: Text('row 1 data 3')),
                ],
              ),

              TableRow(
                children: [
                  TableCell(child: Text('row 2 data 1')),
                  TableCell(child: Text('row 2 data 2')),
                  TableCell(child: Text('row 2 data 3')),
                ],
              ),

              TableRow(
                children: [
                  TableCell(child: Text('row 3 data 1')),
                  TableCell(child: Text('row 3 data 2')),
                  TableCell(child: Text('row 3 data 3')),
                ],
              ),

            ],
          ),
        ),
      ),
    );
  }
}