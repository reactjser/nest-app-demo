import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [StudentsModule],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
