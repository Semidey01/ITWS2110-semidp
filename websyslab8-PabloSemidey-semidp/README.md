# Lab 8 - PHPMYADMIN & SQL

This lab involved designing and manipulating a relational database using MySQL. I created a database (websyslab8) and built three tables: students, courses, and grades. The schema followed the required constraints such as primary keys, foreign keys, UTF-8 collation, and correct data types.

## Observations & Notes

The students table included column names containing spaces (e.g., first name, last name), which required using backticks (`) in all SQL queries.

ALTER TABLE was used to add new fields (address and course metadata) without recreating tables.

The grades table used foreign keys referencing students and courses, enabling relational operations.

Insert statements demonstrated referential integrity between tables.

## SQL Selection / Query Methods Used

ORDER BY for sorting students by rin, last name, rcsID, and first name.

INNER JOIN to filter students whose grades exceeded a threshold.

DISTINCT to prevent duplicate listings when students had multiple matching grades.

GROUP BY with AVG() to calculate average grades per course.

COUNT() with LEFT JOIN to count students per course, including courses without grades.

WHERE for conditional selection (e.g., WHERE grade > 90).

Use of aliases for cleaner output formatting.

## Assumptions

Sample course, student, and grade data could be chosen freely as long as it followed the schema.

Phone numbers and ZIP codes were stored as INT and CHAR per instructions, despite not being ideal for real-world structures.

Course section and year were treated as basic metadata fields with no additional constraints.