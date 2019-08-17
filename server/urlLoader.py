import urllib.request
import re
import difflib
import json
import logging

ID_LOOKUP = {'Aerospace Engineering': 5892, 'African American and African Studies': 5893, 'Air Force ROTC': 5894, 'American Sign Language': 5895, 'American Studies': 5896, 'Anthropology': 5897, 'Archaeology': 5898, 'Architectural History': 5899, 'Architecture': 5900, 'Army ROTC': 5901, 'Astronomy': 5902, 'Bachelor of Interdisciplinary Studies': 5903, 'Biology': 5904, 'Biomedical Engineering': 5905, 'Chemical Engineering': 5906, 'Chemistry': 5907, 'Civil Engineering': 5908, 'Classics': 5909, 'Cognitive Science': 5910, 'College Science Scholars Program': 5911, 'Speech Communication Disorders': 5912, 'Comparative Literature': 5913, 'Computer Engineering': 5914, 'Computer Science (B.A.)': 5915, 'Computer Science (B.S.)': 5916, 'Criminal Justice Education ': 5917, 'Dance': 5918, 'Commerce': 5919, 'Drama': 5920, 'East Asian Languages, Literatures and Culture': 5921, 'Economics': 5922, 'Electrical Engineering': 5923, 'Engineering Science': 5924, 'English': 5925, 'Environmental Sciences': 5926, 'Environmental Thought and Practice': 5927, 'French': 5928, 'German': 5929, 'German Studies': 5930, 'History': 5931, 'History of Art': 5932, 'Human Biology': 5933, 'Human Resources Management ': 5934, 'Independent Studies and INST Courses': 5935, 'Information Technology ': 5936, 'Interdisciplinary Major Program': 5937, 'Jewish Studies': 5938, 'Kinesiology (BSEd)': 5939, 'Latin American Studies': 5940, 'Liberal Arts Seminars (LASE)': 5941, 'Lifetime Physical Activity Options': 5942, 'Linguistics': 5943, 'Materials Science and Engineering': 5944, 'Mathematics': 5945, 'Mechanical Engineering': 5946, 'Media Studies': 5947, 'Medieval Studies': 5948, 'Middle Eastern and South Asian Languages and Cultures': 5949, 'Minors in the Department of Engineering and Society': 5950, 'Music': 5951, 'Naval ROTC': 5952, 'Neuroscience': 5953, 'Nursing': 5954, 'Philosophy': 5955, 'Physics': 5956, 'Political and Social Thought': 5957, 'Political Philosophy, Policy, and Law': 5958, 'Politics': 5959, 'Psychology': 5960, 'Religious Studies': 5961, 'Slavic Languages and Literatures': 5962, 'Sociology': 5963, 'Spanish': 5964, 'Statistics': 5965, 'Women, Gender & Sexuality': 5966, 'Studio Art': 5967, 'Systems Engineering': 5968, 'University Seminars': 5969, 'Urban and Environmental Planning': 5970, 'UVA Post Baccalaureate Pre-Medical Program': 5971, 'Accelerated Bachelor/MPP': 5973, 'Procurement and Contracts Management': 5974, 'Applied Mathematics Program': 5975, 'College Arts Scholars Program': 5976, 'National Criminal Justice Command College': 5977, 'Italian': 5978, 'Global Sustainability Minor': 5979, 'Historic Preservation Minor': 5980, 'Landscape Architecture Minor': 5981, 'Bachelor of Professional Studies in Health Sciences Management': 5982, 'Youth & Social Innovation (BSEd)': 5983, 'Global Studies in Education': 5984, 'Global Studies': 5985, 'Public Policy and Leadership': 5986, 'Federal Acquisition': 5987, 'Interdisciplinary Major of Global Studies': 5988, 'Common First Year in the School of Architecture': 5989, 'Portuguese minor': 5990, 'Health and Wellbeing Minor ': 5991, 'Public Policy and Leadership Minor': 5992}
MAJORS = ID_LOOKUP.keys()

## ------------------------- ONLY FOR UPDATING THE ID_LOOKUP LIST ------------------------- ##
def getMajors(id):
    url = "http://records.ureg.virginia.edu/preview_program.php?catoid=47&poid=" + str(id) + "&returnto=3494"

    fp = urllib.request.urlopen(url)
    mybytes = fp.read()

    mystr = mybytes.decode("utf8")
    # print(mystr)

    pattern = r'<title>Program: (.*?) - University of Virginia(.*?)</title>'
    result = re.search(pattern, mystr)
    ret = result.group(1)
    
    fp.close()
    return ret


def refreshIDs():
    store = {}
    # starts at 5892 and ends at 5992
    for x in range(5892, 5993):
        try:
            store[getHTML(x)] = x 
        except:
            print("failed " + str(x))
        
    return store
## ------------------------- ONLY FOR UPDATING THE ID_LOOKUP LIST ------------------------- ##

def getIntendedMajor(major):
    global MAJORS
    maxScore = 0
    ret = ""
    for m in MAJORS:
        temp = difflib.SequenceMatcher(None,str(major),str(m))
        if temp.ratio() > maxScore:
            if temp.ratio() > 0.99:
                return m
            maxScore = temp.ratio()
            ret = m
            logging.warning(str(ret) + " with likeness " + str(maxScore))

    return ret

def getClasses(major):
    global ID_LOOKUP
    logging.warning("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    logging.warning("RECEIVED " + str(major) + " FROM FRONT END")
    logging.warning("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    ID = ID_LOOKUP[getIntendedMajor(major)]

    url = "http://records.ureg.virginia.edu/preview_program.php?catoid=47&poid=" + str(ID) + "&returnto=3494"

    fp = urllib.request.urlopen(url)
    mybytes = fp.read()

    mystr = mybytes.decode("utf8")

    pattern = r'>([A-Z]* \d{4}) - (.*?)</a>'
    arrOfClasses = re.findall(pattern, mystr)
    
    fp.close()
    return json.dumps(arrOfClasses)

