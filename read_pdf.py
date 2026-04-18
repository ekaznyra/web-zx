import pypdf
import sys

def main():
    try:
        reader = pypdf.PdfReader('C:/Users/ThaoTamMewMew/Downloads/SS190893_NGUYEN THI THAO TAM.pdf')
        texts = [page.extract_text() for page in reader.pages]
        print('\n---\n'.join(texts))
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
