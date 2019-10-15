import { Component, OnInit } from '@angular/core';
import { Student} from '../student'
@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.component.html',
  styleUrls: ['./lab5.component.css']
})
export class Lab5Component implements OnInit {
  showFormEdit:boolean = false; selectStudentId=-1;

formStudent 
students: Student[] = [

{

id: 1,

fullName: 'Nguyễn văn tèo',

birthday: "2019-07-30",

mark: 3

},

{

id: 2,

fullName: 'Phan thị nở',

birthday: "2019-03-28",

mark: 8

},

];


constructor() { }
isEdit
isAdd
ngOnInit() {

}

//xep loai

gradeStudent(student: Student) {

  if (student.mark >= 0 && student.mark < 5) {
  
  return 'Yếu/Kém'
  
  } else {
  
  if (5 <= student.mark && student.mark <= 8) return 'Trung bình/Khá'
   if (student.mark > 8) return 'Giỏi/Xuất sắc'
  }
  
  }
   
  edit(id)
  {
    this.isEdit=true
    this.isAdd=false
    this.formStudent =this.students.filter(student => {
      return student.id === id
    })[0]
  console.log(this.formStudent);
    
  }
  add()
  {
    this.isAdd=true
    this.isEdit=false
  }
  Delete(id) {
    let check = confirm("Bạn muốn xóa sinh viên này ??")
    if (check) {
      let sd = this.students.filter(student => {
        return student.id !== id
      }
      )
      this.students = sd;
    }
  }
  Accept() {
    for (let i of this.students) {
      if (i.id == this.formStudent.id) {
        i.fullName = this.formStudent.fullName;
        i.birthday = this.formStudent.birthday;
        i.mark = this.formStudent.mark;
      }
    }
    this.Cancel()


  }
  Add(formStudent) {
    this.formStudent.id = this.students.length + 1;
    this.students.push(formStudent)
    this.Cancel();
  }
  Edit(Student) {
    this.showFormEdit = true;
    this.formStudent.id = Student.id;
    this.formStudent.fullName = Student.fullName;
    this.formStudent.birthday = Student.birthday;
    this.formStudent.mark = Student.mark;

  }
  Cancel() {
    this.showFormEdit = false;
    this.formStudent = {
      id: 0,
      fullName: '',
      birthday: new Date().toISOString().substring(0, 10),
      mark: 0,
    };

  }
}  