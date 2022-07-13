import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public courseId = "123";
  public isDisabled = false;
  public name = "Manikanta N";
  public myUrl = window.location.href;
  public myText = "TextColor";
  public myText1 = "TextStyle";
  public required = true;
  public Group = {
    "TextColor" : this.required,
    "TextSize" : !this.required,
    "TextStyle" : this.required,
  }
  public myColor = 'orange';
  public myStyles = {
    color: "gold",
    fontStyle: "italic",
    fontSize: "50px"
  }
  public greetings = "";
  public data = '';
  public status = false;
  public myChoice = "four";
  public subjects =["Angular","React","Vue","Bootstrap"];
  @Input('fromParent') public parent: any;
  @Output() public childInfo = new EventEmitter();
  public person = {
    firstName: "mani",
    lasName : "kanta",
  }
  public date =new Date();
  constructor() { }

  ngOnInit(): void {
  }
  userName(){
    return "welcome Mr."+this.name;
  }
  onClick(){
   this.greetings="Welcome to Rsk Helpline!";
  }
  message(message: any){
    console.log(message);
  }
  fireEvent(){
    this.childInfo.emit("This is Child Info");
  }
}
