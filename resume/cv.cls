\ProvidesClass{cv}[2020/06/09 kdsuneraavinash cv class]

% Font size, Paper size
\LoadClass[10pt,a4paper]{article}
% Remove paragraph indentation
\usepackage[parfill]{parskip} 
% Required for boldface (\bf and \bfseries) tabular columns
\usepackage{array}
% Required for `if then else` statements
\usepackage{ifthen}
% Suppress page numbers
\pagestyle{empty}
% Table align package
\usepackage{tabularx}
% Add margin
\usepackage{changepage}
% Show images
\usepackage{graphicx}
% Show hyperlinks
\usepackage[hidelinks]{hyperref}
% Background image
\usepackage[pages=some]{background}
% Set default separator to a diamond
\def \sep {$\diamond$}

%-----------------------------------
%	Name and Subtitle
%-----------------------------------

% Defines the face and background image commands
\def \imagename#1{\def\@imagename{#1}}
\def \bgimagename#1{\def\@bgimagename{#1}}
% Defines the \name command to set name
\def \name#1{\def\@name{#1}}
\def \@name {}
% Subtitle lines
\let \@subtitleone \relax
\let \@subtitletwo \relax
\let \@subtitlethree \relax
\def \subtitle #1{
  \@ifundefined{@subtitletwo}{
    \def \@subtitletwo {#1}
  }{
  \@ifundefined{@subtitlethree}{
  \def \@subtitlethree {#1}
  }{
     \def \@subtitleone {#1}
  }}
}

% \printname is used to print the name as a page header
\def \printname {
  \begingroup
    {\MakeUppercase{\namesize\bf \@name}}
    \nameskip\break
  \endgroup
}
% \printsubtitle is used to style an subtitle line (given as input)
\def \printsubtitle #1{
  \begingroup
    \def \\ {\sep\ }
    {\subtitlesize #1}
  \endgroup
  \par
  \subtitleskip
}

%-----------------------------------
%	Header
%-----------------------------------

% Background image
\backgroundsetup{
    scale=1,
    color=black,
    opacity=1,
    angle=0,
    contents={%
        \includegraphics[width=\paperwidth,height=\paperheight]\@bgimagename
    }%
}

% Heading
\let\ori@document=\document
\renewcommand{\document}{
    \ori@document
    \@ifundefined{@bgimagename}{}{
        \BgThispage
    } 
    \@ifundefined{@imagename}{
        \centerline\printname
        \@ifundefined{@subtitleone}{}{
            \centerline{\printsubtitle{\@subtitleone}}}
        \@ifundefined{@subtitletwo}{}{ 
            \centerline{\printsubtitle{\@subtitletwo}}}
        \@ifundefined{@subtitlethree}{}{
            \centerline{\printsubtitle{\@subtitlethree}}}
    }{
        \noindent\begin{minipage}[]{0.17\textwidth}
            \includegraphics[width=\linewidth]\@imagename
        \end{minipage}%
        \hfill%
        \begin{minipage}[]{0.8\textwidth}
            \printname
            \@ifundefined{@subtitleone}{}{
                \printsubtitle{\@subtitleone}}
            \@ifundefined{@subtitletwo}{}{ 
                \printsubtitle{\@subtitletwo}}
            \@ifundefined{@subtitlethree}{}{
                \printsubtitle{\@subtitlethree}}
        \end{minipage}
    }
}

%-----------------------------------
%	Sections
%-----------------------------------

% Defines the rSection environment for the large sections within the CV
\newenvironment{rSection}[1]{
    \sectionskip
    \MakeUppercase{\bf #1} 
    \sectionlineskip
    \vspace{-12pt}
    \\
    \noindent\rule{\linewidth}{0.4pt}
    \vspace{-16pt}
    \begin{list}{}{ 
        \setlength{\leftmargin}{1.5em} 
    }
    \item[]
}{
    \end{list}
}

% Defines tabular section
\newenvironment{tSection}[2]{
    \begin{rSection}{#1}
        \vspace{3pt}
        \begin{tabular}{ @{} > {\bfseries}l @{\hspace{4ex}} l @{\hspace{2ex}} l }
            #2
        \end{tabular}
    \end{rSection}    
}

%-----------------------------------
%	White-spaces
%-----------------------------------

\def\namesize{\LARGE}           % Size of the name at the top of the document
\def\subtitleskip{\smallskip}   % The space between the two subtitle (or phone/email) lines
\def\sectionlineskip{\medskip}  % The space above the horizontal line for each section 
\def\nameskip{\bigskip}         % The space after your name at the top
\def\sectionskip{\medskip}      % The space after the heading section
\def\subtitlesize{\large}
\urlstyle{same}                 % Use same font in hyperlinks
