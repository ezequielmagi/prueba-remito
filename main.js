import alumnos from "./data.js";

console.log(alumnos.length)
alumnos.forEach(alumno => {
    console.log(`Nombre completo: ${alumno.firstname} ${alumno.lastname}`);
    console.log(`Correo electrónico: ${alumno.email}`);
    console.log(`Curso: ${alumno.course1}`);
  });

  const tablaBody = document.querySelector('#tablaAlumnos tbody');

  // Recorrer el array de alumnos
  alumnos.forEach(alumno => {
      // Crear una fila para cada alumno
      const fila = document.createElement('tr');
  
      // Insertar celdas con la información del alumno
      fila.innerHTML = `
          <td>${alumno.username}</td>
          <td>${alumno.password}</td>
          <td>${alumno.firstname}</td>
          <td>${alumno.lastname}</td>
          <td>${alumno.email}</td>
          <td>${alumno.course1}</td>
      `;
  
      // Añadir la fila al cuerpo de la tabla
      tablaBody.appendChild(fila);
  });