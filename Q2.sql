SELECT department.name, COUNT(employee.id) AS employee_count
FROM department
LEFT JOIN employee ON department.id = employee.dept_id
GROUP BY department.id
ORDER BY employee_count DESC, department.name ASC;