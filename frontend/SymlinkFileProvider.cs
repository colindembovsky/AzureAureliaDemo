using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Primitives;
using System.IO;

namespace frontend
{
  public class SymLinkFileInfo : IFileInfo
  {
    public IFileInfo Original { get; set; }

    public SymLinkFileInfo(IFileInfo original)
    {
      Original = original;
    }

    public bool Exists => Original.Exists;

    public long Length
    {
      get
      {
        using (var file = File.Open(Original.PhysicalPath, FileMode.Open))
        {
          return file.Length;
        }
      }
    }

    public string PhysicalPath => Original.PhysicalPath;

    public string Name => Original.Name;

    public DateTimeOffset LastModified => Original.LastModified;

    public bool IsDirectory => Original.IsDirectory;

    public Stream CreateReadStream()
    {
      return Original.CreateReadStream();
    }
  }

  public class SymlinkFileProvider : IFileProvider
  {
    public IFileProvider PhysicalFileProvider { get; set; }

    public SymlinkFileProvider(string root) 
    {
      PhysicalFileProvider = new PhysicalFileProvider(root);
    }

    public IFileInfo GetFileInfo(string subpath)
    {
      var physFileInfo = PhysicalFileProvider.GetFileInfo(subpath);
      var fileInfo = new FileInfo(physFileInfo.PhysicalPath);
      if ((fileInfo.Attributes & FileAttributes.ReparsePoint) == FileAttributes.ReparsePoint)
      {
        return new SymLinkFileInfo(physFileInfo);
      }
      return physFileInfo;
    }

    public IDirectoryContents GetDirectoryContents(string subpath)
    {
      return PhysicalFileProvider.GetDirectoryContents(subpath);
    }

    public IChangeToken Watch(string filter)
    {
      return PhysicalFileProvider.Watch(filter);
    }
  }
}