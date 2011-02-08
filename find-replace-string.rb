#!/usr/bin/env ruby
require 'find'
require 'fileutils'

#Module Sitemap
  # variable holds page path
	@@sitemap = ''

	# Portion of the path you want to remove
	RemoveName = "views/pages/"
	
	# Files to ignore
	NotMatch = [""]
							
		# Folders to ignore
	NoDirectory = [ ""]
												
	def findFilePath dir, wordTosearch, replaceWordWith
	
		Find.find(dir) do |path|
		#NEW Start
			if FileTest.directory?(path)
								if File.basename(path)[0] == ?.
									Find.prune
								end
								
								#directory to ignore
							if NoDirectory.include?(path)
									Find.prune
							end
							
							fileNameWithNoPages = path.sub(RemoveName, "")
							fileFolderName = fileNameWithNoPages.split('/')
								
			elsif File.file?(path) 
							#Find.prune
							fileName = path.split('/')
							#puts path
					if fileName.last.match(/(sass|haml)$/)
            
						#puts path
						#@@sitemap += "FILE: (#{path}) Filename: (#{fileName.last}) \n"
						#puts @@sitemap
						fileNameWithNoPages = path.sub(RemoveName, "")
						
						# if wish to remove the extention of the page
						#fileNameWithNoPagesNoHaml = fileNameWithNoPages.sub('haml', "")
						
						#Output file path
						puts fileNameWithNoPages
						
						@@FileToRead = File.read(path)
						# Only edit file if their is a match
						if @@FileToRead.include?(wordTosearch)
              @@replacedFile = @@FileToRead.gsub(wordTosearch, replaceWordWith)
              File.open(path, 'w') {|f| f.write(@@replacedFile) }
              @@sitemap += "FILE: (#{path}) Filename: (#{fileName.last}) \n"
            end
						
					end
			end
		
		end
		# can use to save to a file the output.
		#File.open('views/pages/validation.haml', 'w') {|f| f.write(@@sitemap) }
		
	end
	
	
## Initiate the function
findFilePath 'pathtofile', ' word-to-look-for ', ' replace-with-this-word '