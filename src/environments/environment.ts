// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURLBase: 'http://localhost:8080',
  apiURLClientes: 'http://localhost:8080/api/clientes',
  apiURLServicos: 'http://localhost:8080/api/servicos-prestados',
  apiURLUsuarios: 'http://localhost:8080/api/usuarios',
  apiURLUsuariosListaUsername: 'http://localhost:8080/api/usuarios/listarUsuarios',
  apiURLUsuariosListaRoles: 'http://localhost:8080/api/usuarios/listarRolesUsuario',
  apiURLUsuariosAlteraRoles: 'http://localhost:8080/api/usuarios/alteraRolesUsuario',
  clientId: 'my-angular-app',
  clientSecret: '@321',
  apiURLToken: 'http://localhost:8080/oauth/token',
  roles: 'ADMIN,SERVICO,CLIENTE,VENDEDOR'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
