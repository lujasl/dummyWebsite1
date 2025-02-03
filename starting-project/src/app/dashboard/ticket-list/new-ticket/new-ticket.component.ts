import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{

  @ViewChild("form") private form? :ElementRef<HTMLFormElement>
 // private form = viewChild.required<ElementRef<HTMLFormElement>>("form")
  ngAfterViewInit()
  {
    console.log("ngAfterViewInit")
    console.log(this.form?.nativeElement)
    console.log("Praise Baal")      
  }
  ngOnInit(): void {
    console.log("OnInit")
    console.log(this.form?.nativeElement)  
    console.log("godverdomme")      
  }
  OnSubmit(title:string, ticketText: string)
  {
    console.log(title, ticketText)
    this.form?.nativeElement.reset()
  }
}
