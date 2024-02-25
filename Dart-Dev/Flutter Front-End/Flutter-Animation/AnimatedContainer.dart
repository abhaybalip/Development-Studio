// Flutter - Animation Container
import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  bool change = false;
  double box_height = 100,box_width = 100;
  var color = Colors.grey;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: null,
        body: Center(
          child: Column(
            children: [
              AnimatedContainer(
            duration: Duration(seconds: 2),
            height: this.box_height,
            width: this.box_width,
            decoration: BoxDecoration(
              border: Border.all(),
              color: this.color,
            ),
            curve: Curves.linear,
            child: Text('Animated Container'),
            onEnd: ()=>{
              print('Animation Ended !')
            },
          ),

          ElevatedButton(
            child: Text('Animate'),
            onPressed: ()=>{
              this.setState(() {
                this.change = !this.change;
                if(change){
                  this.box_height = 200;
                  this.box_width = 200;
                  this.color  = Colors.red;
                }else{
                  this.box_height = 100;
                  this.box_width = 100;
                  this.color = Colors.yellow;
                }
              })
            },
          )
            ],
          )
        ),
      ),
    );
  }
}