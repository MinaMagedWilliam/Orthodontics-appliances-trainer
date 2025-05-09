import os

path = "./images"

imglist = os.listdir(path)
imglist.sort()
print("Total images:", len(imglist))
for img in imglist:
    print("     {\n      title: \"\",\n      content: \"\",\n      image: \"images/" + img + "\"\n      },\n")