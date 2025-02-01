#include <stdio.h>
#include <fcgiapp.h>

int main() {
  FCGX_Init();
  int socket = FCGX_OpenSocket("127.0.0.1:9000", 1024);
  FCGX_Request request;
  FCGX_InitRequest(&request, socket, 0);
  while(FCGX_Accept_r(&request) >= 0) {
    FCGX_FPrintF(request.out, "Accept\nContent-type: text/html\r\n\r\nSynco de Mayo!\n");
    FCGX_Finish_r(&request);
  }
  return 0;
}
