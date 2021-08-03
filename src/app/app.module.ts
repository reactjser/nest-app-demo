import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { TeachersModule } from 'src/teachers/teachers.module';

@Module({
  imports: [StudentsModule, TeachersModule],
})
export class AppModule {}
