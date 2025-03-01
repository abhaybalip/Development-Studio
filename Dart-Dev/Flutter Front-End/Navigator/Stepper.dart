import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: StepperExample(),
    );
  }
}

class StepperExample extends StatefulWidget {
  @override
  _StepperExampleState createState() => _StepperExampleState();
}

class _StepperExampleState extends State<StepperExample> {
  // Track the current step
  int _currentStep = 0;

  // Define the steps
  List<Step> _steps = [
    Step(
      title: Text('Step 1'),
      content: Column(
        children: [
          Text('This is the content of step 1'),
          TextField(
            decoration: InputDecoration(labelText: 'Enter your name'),
          ),
        ],
      ),
      isActive: true,
    ),
    Step(
      title: Text('Step 2'),
      content: Column(
        children: [
          Text('This is the content of step 2'),
          TextField(
            decoration: InputDecoration(labelText: 'Enter your email'),
          ),
        ],
      ),
      isActive: true,
    ),
    Step(
      title: Text('Step 3'),
      content: Column(
        children: [
          Text('This is the content of step 3'),
          TextField(
            decoration: InputDecoration(labelText: 'Enter your phone number'),
          ),
        ],
      ),
      isActive: true,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stepper Example'),
      ),
      body: Stepper(
        currentStep: _currentStep,
        onStepTapped: (step) {
          setState(() {
            _currentStep = step;
          });
        },
        onStepContinue: () {
          if (_currentStep < _steps.length - 1) {
            setState(() {
              _currentStep += 1;
            });
          }
        },
        onStepCancel: () {
          if (_currentStep > 0) {
            setState(() {
              _currentStep -= 1;
            });
          }
        },
        steps: _steps,
      ),
    );
  }
}
