import { Module } from '@nestjs/common';
import { StudentController } from 'src/students/students.controller';
import { StudentsService } from 'src/students/students.service';
import { TeachersController } from 'src/teachers/teachers.controller';
import { TeachersService } from 'src/teachers/teachers.service';

@Module({
  imports: [],
  controllers: [StudentController, TeachersController],
  providers: [StudentsService, TeachersService],
})
export class AppModule {}
