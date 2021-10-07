namespace Application.Core
{
    public class AppException
    {
         public AppException(int statusCode, string  message, string details)
         {
             StatusCode= StatusCode;
             Message= message;
             Details=details;
         }


        public int StatusCode {get;set;}
        public string Message {get;set;}
        public string Details {get;set;}
    }
}