#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *input_text = "Hello";
    
    int given_key = 1;
    
    if(given_key < 0)
    {
        return 1;
    }
    
    printf("Plain text: %s\n", input_text);
    printf("Cipher text: \n");
    
    for (int i = 0; i < strlen(input_text); i++)
    {
        int start = 0;
        int current_char = 0;
        
        if (isalpha(input_text[i]))
        {
            start = 'a';   
            
            current_char = (((input_text[i] - start) + given_key) % 26) + start;
            
            printf("%c", current_char);
            
        }    
    }
    
    return 0;
}